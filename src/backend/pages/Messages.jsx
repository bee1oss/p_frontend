import React, { useEffect } from 'react'
import MessagesTable from '../layouts/contact/MessagesTable'
import Table from '../../components/table/Table'
import TableHeadMessage from '../layouts/contact/TableHeadMessage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContact } from '../../redux/slices/Contact'


function Messages() {
  const dispatch = useDispatch()
  const contact = useSelector((state) => state.contact.contact)

  useEffect(() => {
    dispatch(fetchContact())
  }, [dispatch])

  console.log("Contact:", contact)
  return (
    <div>
      <Table>
        <TableHeadMessage />
        {(
            contact.items.map((obj) => (
              <MessagesTable
                key={obj._id}
                id={obj._id}
                name={obj.name}
                email={obj.email}
                subject={obj.subject}
                okundu={obj.isRead}
              />
            ))
          )
        }
      </Table>
    </div>
  )
}

export default Messages
