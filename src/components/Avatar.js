export function Avatar(props) {
  return (
    <div className={`w-8 h-8 rounded-full overflow-hidden shadow-inner`}>
      <img
        src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="user avatar"
        className="object-cover object-center w-full h-full visible group-hover:hidden"
      />
    </div>
  )
}