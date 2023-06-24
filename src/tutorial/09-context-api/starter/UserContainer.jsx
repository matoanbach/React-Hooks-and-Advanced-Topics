import { useAppContext } from "./Navbar";


function UserContainer() {
  const {user, logout} = useAppContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Please login</p>
        </>
      )}
    </div>
  );
}

export default UserContainer;
