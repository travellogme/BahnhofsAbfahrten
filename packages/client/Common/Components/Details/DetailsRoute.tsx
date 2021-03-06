import { Details } from 'client/Common/Components/Details';
import { useQuery } from 'client/Common/hooks/useQuery';
import type { RouteComponentProps } from 'react-router';

interface Props
  extends RouteComponentProps<{
    train: string;
    initialDeparture?: string;
  }> {
  urlPrefix?: string;
}

export const DetailsRoute = ({
  match: {
    params: { train, initialDeparture },
  },
  urlPrefix,
}: Props) => {
  const query = useQuery();

  return (
    <Details
      train={train}
      stationId={query.station as string}
      initialDeparture={initialDeparture}
      currentStopId={query.stop as string}
      urlPrefix={urlPrefix}
    />
  );
};
// eslint-disable-next-line import/no-default-export
export default DetailsRoute;
