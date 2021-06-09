import styles from '../../styles/main/Main.module.scss';

function Text(props) {
  let text;
  switch (props.action) {
    case 'add':
      text = (
        <>
          <h1>Add an IP address</h1>
          <p>Once an IP has been added, the service catalogs it so that it is known if it belongs to one of the following cloud service providers: Amazon Web Services, Google Cloud Platform, Azure</p>
        </>
      );
      break;
    case 'get':
      text = (
        <>
          <h1>Get an IP address</h1>
          <p>Querying the service with an IP will indicate if the IP belongs to one of three cloud service providers: Amazon Web Services, Google Cloud Platform, Azure</p>
        </>
      );
      break;
    case 'update':
      text = (
        <>
          <h1>Update an IP address</h1>
          <p>Update details about an IP because there may be a switch from one cloud provider to another</p>
        </>
      );
      break;
    case 'delete':
      text = (
        <>
          <h1>Delete an IP address</h1>
          <p>Delete an IP from the Service</p>
        </>
      );
      break;
    default:
      text = (
        <>
          <h1>IP Service</h1>
          <p>An easy way to find if an IP belongs to Amazon Web Services, Azure or Google Cloud Platform</p>
        </>
      );
      break;
  }

  return <div className={styles.text}>{text}</div>;
}

export default Text;