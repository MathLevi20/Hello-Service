import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center py-24 ">
      <div
        className="spinner-border items-center animate-spin                     
        transition duration-1000
        block w-8 h-8 rounded-full m-12"
        role="status"
      >
        <img
          src="https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/Components/loading.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9Db21wb25lbnRzL2xvYWRpbmcucG5nIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwNTA2NzkxLCJleHAiOjE5ODU4NjY3OTF9.jMMw-XSR9MMlsJQEvRG_rP7elv6bkXYu7Z1FQn2Ocfk"
          width="40"
        />
      </div>
    </div>
  )
}

export default Loading
