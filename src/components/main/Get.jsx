import {useEffect, useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faRecycle, faTimes} from '@fortawesome/free-solid-svg-icons';

import validate from '../../utils/validator';
import {API} from '../../settings';
import {InputWrapper, InfoMessage, SuccessMessage, ErrorMessage} from '../../styles/main/form';
import mainStyles from '../../styles/main/Main.module.scss';
import formStyles from '../../styles/main/Form.module.scss';

function Get(props) {
  const [ip, setIp] = useState(['', '', '', '']);
  const [errors, setErrors] = useState([]);

  // messages
  const [info, setInfo] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  function onChangeIp(index) {
    return (syntheticEvent) => {
      setIp(ip => {
        const copy = ip.slice();
        copy[index] = syntheticEvent.target.value;
        return copy;
      });

      setErrors(errors => {
        const copy = errors.slice();
        copy[index] = '';
        return copy;
      });
    }
  }

  function submit(syntheticEvent) {
    syntheticEvent.preventDefault();

    const errors = validate(ip);
    setErrors(errors);
    if (errors.find(error => error !== '')) return;

    setInfo('Please wait...');

    axios.get(API + '?ip=' + ip.join('.'))
      .then(response => setSuccess(response.data.data.company))
      .catch(error => setError(error));
  }

  useEffect(() => {
    if (ip.includes('')) {
      setInfo('');
      setSuccess('');
      setError('');
    }
  }, [ip]);

  useEffect(() => {
    setError(errors.find(error => error !== ''));
  }, [errors]);

  useEffect(() => {
    if (info) {
      setSuccess('');
      setError('');
    }
  }, [info]);
  useEffect(() => {
    if (success) {
      setInfo('');
      setError('');
    }
  }, [success]);
  useEffect(() => {
    if (error) {
      setInfo('');
      setSuccess('');
    }
  }, [error]);

  return (
    <div className={mainStyles.main}>
      <div className={mainStyles.text}>
        <h1>Get an IP address</h1>
        <p>Querying the service with an IP will indicate if the IP belongs to one of three cloud service providers: Amazon Web Services, Google Cloud Platform, Azure</p>
      </div>

      <form className={formStyles.form}>
        <div>
          {ip.map((number, index) =>
            <InputWrapper
              key={index}
              type='text'
              onChange={onChangeIp(index)}
              error={errors[index]}
            />
          )}
        </div>

        <InfoMessage display={info}>
          <FontAwesomeIcon icon={faRecycle}/>
          <p>{info}</p>
        </InfoMessage>
        <SuccessMessage display={success}>
          <FontAwesomeIcon icon={faCheck}/>
          <p>{success}</p>
        </SuccessMessage>
        <ErrorMessage display={error}>
          <FontAwesomeIcon icon={faTimes}/>
          <p>{error}</p>
        </ErrorMessage>

        <button type='submit' onClick={submit}>send</button>
      </form>
    </div>
  );
}

export default Get;