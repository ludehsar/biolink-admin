import React, { useState } from 'react'
import { Button, Container } from 'reactstrap'
import AddOrEditBiolinksForm from '../biolinks/AddOrEditBiolinksForm'
import AddOrEditUsersForm from './AddOrEditUsersForm'

export interface UserFormProps {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  userId?: string
  setUserId?: React.Dispatch<React.SetStateAction<string>>
}

const UserForm: React.FC<UserFormProps> = ({ step, setStep, userId, setUserId }) => {
  const [totalNewBiolinksCount, setTotalNewBiolinksCount] = useState<number>(0)

  switch (step) {
    case 1:
      return <AddOrEditUsersForm variant="Add" {...{ setStep, setUserId }} />
    case 2: {
      return (
        <>
          {Array(totalNewBiolinksCount).fill(
            <Container className="mt--7 mb-8" fluid>
              <AddOrEditBiolinksForm variant="Add" {...{ userId }} />
            </Container>
          )}
          <Button
            color="primary"
            size="lg"
            block
            style={{ margin: 20, maxWidth: '80vw' }}
            onClick={() => setTotalNewBiolinksCount((prev) => prev + 1)}
          >
            Add a new Biolink
          </Button>
        </>
      )
    }
    default:
      return <>Loading...</>
  }
}

export default UserForm
