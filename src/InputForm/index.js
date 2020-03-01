import React from 'react';
import { Form, Field } from 'react-final-form'

import styles from './styles.module.scss';

const onSubmit = values => {
  console.log(values.date);
  console.log(values.distance);
}

const InputForm = () => (
  <Form
    className = {styles.container}
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          className={styles.field}
          name="date"
          component="input"
          type="text"
          placeholder="Дата"
        />
        <Field
          className={styles.field}
          name="distance"
          component="input"
          type="text"
          placeholder="Дистанция"
        />
        <button className={styles.button}>
          Добавить
        </button>      
    </form>
    )}
  />
)

export default InputForm;