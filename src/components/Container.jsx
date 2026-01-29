function Container({ children }) {
    return (
        <div style={{ border: "2px solid red", padding: "20px" }}>
            {/* This injects whatever was put inside the <Container> tags */}
            {children}
        </div>
    );
}

export default Container;