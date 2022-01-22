const styles = {
  backgroundColor: "#221035",
  color: "white",
  padding: "1rem",
  marginTop: "2rem",
};

function Header({ title }) {
  return (
    <>
      <h1 style={styles}>{title}</h1>
    </>
  );
}

export { Header };
