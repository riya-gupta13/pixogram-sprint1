
function Badge() {
    return (
      <button onClick={console.log('click event')} type="button" className="btn btn-primary">
          Notifications <span className="badge bg-secondary">4</span>
      </button>
    );
  }
  
  export default Badge;



