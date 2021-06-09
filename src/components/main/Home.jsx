import {Link} from 'react-router-dom';

import Text from './Text';

import mainStyles from '../../styles/main/Main.module.scss';
import homeStyles from '../../styles/main/Home.module.scss';

function Home(props) {
  return (
    <div className={mainStyles.main + ' ' + homeStyles.home}>
      <Text action='home'/>

      <div>
        <div className={homeStyles.services}>
          <div>
            <h3>ADD</h3>
            <p>Once an IP has been added, the service catalogs it so that it is known if it belongs to one of the following cloud service providers: Amazon Web Services, Google Cloud Platform, Azure</p>
            <Link to='/add'>Try it</Link>
          </div>
          <div>
            <h3>GET</h3>
            <p>Querying the service with an IP will indicate if the IP belongs to one of three cloud service providers: Amazon Web Services, Google Cloud Platform, Azure</p>
            <Link to='/get'>Try it</Link>
          </div>
          <div>
            <h3>UPDATE</h3>
            <p>Update details about an IP because there may be a switch from one cloud provider to another</p>
            <Link to='/update'>Try it</Link>
          </div>
          <div className={homeStyles.last}>
            <h3>DELETE</h3>
            <p>Delete an IP from the Service</p>
            <Link to='/delete'>Try it</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;