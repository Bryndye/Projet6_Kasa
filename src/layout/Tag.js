function Tag(props) {  
    const stylesParent = {
        backgroundColor: "#FF6060",
        color: "white",
        padding: "5px 25px",
        fontSize: "14px",
        borderRadius:"20px"
      };
    const stylesP = {
        margin:"0"
    }
    return (
        <div style={stylesParent}>
            <p style={stylesP}>{props.title}</p>
        </div>
  );
}

export default Tag;