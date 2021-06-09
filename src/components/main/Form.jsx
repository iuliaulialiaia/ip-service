import {useEffect, useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faRecycle, faTimes} from '@fortawesome/free-solid-svg-icons';

import validate from '../../utils/validator';
import {API} from '../../settings';
import Text from './Text';
import {InputWrapper, InfoMessage, SuccessMessage, ErrorMessage} from '../../styles/main/form';
import mainStyles from '../../styles/main/Main.module.scss';
import formStyles from '../../styles/main/Form.module.scss';

function Form(props) {
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

    let stringIp = ip.join('.');
    const data = {
      ip: stringIp
    };
    switch (props.action) {
      case 'add':
        axios.post(API, data)
          .then(response => setSuccess(response.data.data.message))
          .catch(error => setError(error));
        break;
      case 'get':
        axios.get(API + '?ip=' + stringIp)
          .then(response => setSuccess(response.data.data.company))
          .catch(error => setError(error));
        break;
      case 'update':
        axios.put(API, data)
          .then(response => setSuccess(response.data.data.message))
          .catch(error => setError(error));
        break;
      case 'delete':
        axios.delete(API + '?ip=' + stringIp)
          .then(response => setSuccess(response.data.data.message))
          .catch(error => setError(error));
        break;
      default:
        break;
    }
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
      <Text action={props.action}/>

      <form className={formStyles.form}>
        <div>
          {ip.map((number, index) =>
            <InputWrapper
              key={index}
              type='text'
              value={number}
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

        <button type='submit' onClick={submit}>
          {props.action}
        </button>
      </form>
    </div>
  );
}

export default Form;