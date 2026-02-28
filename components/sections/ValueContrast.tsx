export default function ValueContrast() {
  return (
    <div style={{width: '100%', height: '100%', paddingLeft: 40, paddingRight: 40, paddingTop: 88, paddingBottom: 88, position: 'relative', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
      <div style={{overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex'}}>
        <div style={{color: '#001407', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Unlock Incredible Value for Creators</div>
        <div style={{color: 'rgba(0, 20, 7, 0.70)', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>See how Aisha stacks up against a traditional secretary</div>
      </div>
      <div style={{alignSelf: 'stretch', height: 400, padding: 30, overflow: 'visible', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex', position: 'relative'}}>
        <div style={{width: 680, height: 370, padding: 30, background: 'white', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
          <div style={{width: 318}}>
            <span style={{color: '#001407', fontSize: 32, fontFamily: 'Roboto', fontWeight: '500', lineHeight: '45px', wordWrap: 'break-word'}}>Traditional secretary<br/></span>
            <span style={{color: '#001407', fontSize: 32, fontFamily: 'Roboto', fontWeight: '400', lineHeight: '48px', wordWrap: 'break-word'}}>KES 10,000+ /</span>
            <span style={{color: '#001407', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: '48px', wordWrap: 'break-word'}}> month<br/></span>
            <span style={{color: '#001407', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: '48px', wordWrap: 'break-word'}}>8-hour work day limitations<br/>Training required<br/>Additional benefits costs<br/>Limited scalability</span>
          </div>
        </div>
        <div style={{width: 680, height: 370, padding: 30, background: '#001407', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
          <div>
            <span style={{color: 'white', fontSize: 32, fontFamily: 'Roboto', fontWeight: '500', lineHeight: '48px', wordWrap: 'break-word'}}>Aisha AI Assistant<br/></span>
            <span style={{color: '#D2FF00', fontSize: 36, fontFamily: 'Roboto', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}> KES 500 /</span>
            <span style={{color: '#D2FF00', fontSize: 24, fontFamily: 'Roboto', fontWeight: '500', lineHeight: '48px', wordWrap: 'break-word'}}> month<br/></span>
            <span style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: '48px', wordWrap: 'break-word'}}>24/7 availability<br/>No training needed<br/>instant setup<br/>90% cost saving</span>
          </div>
        </div>
        {/* VS badge — absolutely centered at the boundary of the two cards */}
        <img
          src="/Images/VS_Wrapper(1).svg"
          alt="VS"
          width={79}
          height={78}
          style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}}
        />
      </div>
    </div>
  );
}
