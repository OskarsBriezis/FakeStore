function Star({ filled }) {
    return (
      <span style={{ color: filled ? 'gold' : '#ccc' }}>
        ★
      </span>
    );
  }
  
  export default Star;
  