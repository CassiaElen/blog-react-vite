import PropTypes from 'prop-types';
const HeaderSection = ({ titulo, link }) => {
    return (
        <>
            <div>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}>
                    <h1 style={{
                        fontSize:50
                    }}>{titulo}</h1>
                    <h3>{link}</h3>
                </div>
                <div style={{
                    height:2,
                    width:'100%',
                    backgroundColor:'#6c996f',
                }}> </div>
            </div>
        </>
    );
}

HeaderSection.propTypes = {
    titulo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default HeaderSection