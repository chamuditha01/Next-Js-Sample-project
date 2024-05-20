export default function profileLayout({ children }) {
    return (
      <div>
          <div>
            <h3 style={{ color: 'wheat' }}>profile header</h3>
          </div>
          {children}
          <div>
            <h3 style={{ color: 'wheat' }}>profile footer</h3>
          </div>
        </div>
    );
  }