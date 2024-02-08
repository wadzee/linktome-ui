export interface AccordianProps {
  title: string
  content: string
}

export const Accordian = (props: AccordianProps[]) => {
  return (
    <div>
      {props.map(({ title, content }, idx) => {
        return (
          <details key={idx}>
            <summary>{title}</summary>
            <div>
              <p>{content}</p>
            </div>
          </details>
        )
      })}
    </div>
  )
}
