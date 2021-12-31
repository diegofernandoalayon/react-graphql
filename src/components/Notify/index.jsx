export const Notify = ({ errorMessage }) => {
  if (!errorMessage) return null

  return (
    <div style={{ color: 'red', position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(255,90,90,0.3)' }}>
      {errorMessage}
    </div>
  )
}
