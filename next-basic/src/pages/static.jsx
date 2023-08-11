export function getStaticProps() {
  return {
    props: {
      number: Math.random(),
    },
  }
}

export default function staticc(props) {
  return (
    <div>
      <span>Random: {props.number}</span>
    </div>
  )
}