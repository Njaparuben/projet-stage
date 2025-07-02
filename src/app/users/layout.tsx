
export default function LayoutUsers({
    children
}:{
children:React.ReactNode
}) {
  return (
    <div>
      <div className="h-20 w-full bg-green-500">
        Layout de users
      </div>
          {children}
          <footer>
            footer here
          </footer>
    </div>
  )
}
