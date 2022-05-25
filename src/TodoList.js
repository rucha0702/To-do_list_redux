import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from './actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  // const getLocalItems = (state) => {
  //   state.todoReducers.list = localStorage.getItem('lists');
  //   if (state.todoReducers.list) {
  //     return JSON.parse(localStorage.getItem('lists'));
  //   } else {
  //     return [];
  //   }
  // };
  const [itemData, setItemData] = useState('');
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <div
        style={{ alignItems: 'center', width: '60%' }}
        className='container d-flex flex-column'
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
          className='d-flex mt-5'
        >
          <div style={{ flex: '0.7', height: '3rem' }}>
            <input
              type='text'
              style={{ width: '100%', height: '3rem' }}
              value={itemData}
              onChange={(e) => setItemData(e.target.value)}
              className=''
              placeholder='Task...'
            />
          </div>
          <button
            className='bg-success text-light'
            style={{ flex: '0.3' }}
            onClick={() => {
              if (itemData !== '') {
                dispatch(addTodo(itemData), setItemData(''));
              } else {
                alert('Cannot add empty field');
              }
            }}
          >
            Add Task
          </button>
        </div>

        <div className='w-100 mt-3'>
          {list.map((item) => {
            return (
              <div
                style={{ justifyContent: 'space-between' }}
                key={item.id}
                className='d-flex w-100 border-bottom border-success p-2'
              >
                <div>{item.data}</div>
                <div
                  onClick={() => {
                    dispatch(deleteTodo(item.id));
                  }}
                >
                  {/* <i className='fa fa-spinner fa-spin'></i>
                  <i className='fa fa-trash-can'></i> */}
                  <span style={{ cursor: 'pointer' }} className=''>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            );
          })}
          <span
            className={
              list.length === 0
                ? 'd-none btn btn-danger text-center w-100 mt-4'
                : 'd-block btn btn-danger text-center w-100 mt-4'
            }
            onClick={() => dispatch(removeTodo())}
          >
            Remove all
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoList;
