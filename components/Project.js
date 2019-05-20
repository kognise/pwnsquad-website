import theme from '../theme'

export default (props) => (
  <div>
    <h2>{props.title}</h2>
    <p className='status'>
      <span className='orb'></span>{' '}
      {props.status}
    </p>
    <p>{props.children}</p>

    <style jsx>{`
      h2 {
        margin-bottom: 8px;
      }
      .status {
        text-transform: uppercase;
        color: ${theme.statuses[props.status]};
        margin-top: 0;
      }
      .orb {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: ${theme.statuses[props.status]};
        border-radius: 50%;
      }
    `}</style>
  </div>
)