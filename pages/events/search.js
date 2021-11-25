import EventItem from '@/components/EventItem';
import Link from 'next/link';
import qs from 'qs';
import Layout from '@/components/Layout';
import { API_URL } from 'config';
import { useRouter } from 'next/router';

const SearchPage = ({ events }) => {
  const router = useRouter();
  return (
    <Layout title="Search Result">
      <Link href="/events">Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {events && events.length === 0 && <h3>No Events to Show</h3>}
      {events && events.map((evt) => <EventItem key={evt.id} evt={evt} />)}
    </Layout>
  );
};

// because you never know what will be search, we have to use getServerSideProps
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { venue_contains: term },
        { description_contains: term },
        { performers_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}

export default SearchPage;
