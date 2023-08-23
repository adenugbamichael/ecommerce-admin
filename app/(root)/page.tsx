"use client"

import { Modal } from "@/components/ui/modal"

const SetupPage = () => {
  return (
    <Modal title='Test' description='Test Desc' isOpen onClose={() => {}}>
      Children
    </Modal>
  )
}

export default SetupPage
