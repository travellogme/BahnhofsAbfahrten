// @flow
import { connect } from 'react-redux';
import { getAbfahrtenByString, setCurrentStation } from 'actions/abfahrten';
import Abfahrt from './Abfahrt';
import Loading from './Loading';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './AbfahrtenList.scss';
import type { AppState } from 'AppState';
import type { ContextRouter } from 'react-router';

type ReduxProps = {
  abfahrten: $PropertyType<$PropertyType<AppState, 'abfahrten'>, 'abfahrten'>,
  selectedDetail: ?$PropertyType<$PropertyType<AppState, 'abfahrten'>, 'selectedDetail'>,
};

type Props = ReduxProps &
  ContextRouter & {
    getAbfahrtenByString: typeof getAbfahrtenByString,
    setCurrentStation: typeof setCurrentStation,
  };
type State = {
  loading: boolean,
};

class AbfahrtenList extends React.Component<Props, State> {
  state: State = {
    loading: true,
  };
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };
  componentWillMount() {
    this.getAbfahrten(this.props);
  }
  componentWillReceiveProps(props: Props) {
    if (props.match.params.station !== this.props.match.params.station) {
      this.getAbfahrten(props);
    }
  }
  async getAbfahrten(props: Props) {
    const { getAbfahrtenByString, setCurrentStation } = props;

    this.setState({ loading: true });
    setCurrentStation({
      title: props.match.params.station,
      id: 0,
    });
    await getAbfahrtenByString(props.match.params.station);
    this.setState({ loading: false });
  }
  render() {
    const { loading } = this.state;
    const { abfahrten, selectedDetail } = this.props;

    return (
      <Loading isLoading={loading}>
        <div className={styles.list}>
          {abfahrten.map(a => a && <Abfahrt abfahrt={a} detail={selectedDetail === a.id} key={a.id} />)}
        </div>
      </Loading>
    );
  }
}

export default connect(
  (state: AppState): ReduxProps => ({
    abfahrten: state.abfahrten.abfahrten,
    selectedDetail: state.abfahrten.selectedDetail,
  }),
  {
    getAbfahrtenByString,
    setCurrentStation,
  }
)(AbfahrtenList);