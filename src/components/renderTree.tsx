export const RenderTree = (props: {
  struct: {
    [key: string]: { title: string; list: string[] };
  };
}) => {
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-stretch"
      style={{ gap: 16 }}
    >
      {Object.entries(props.struct).map(([k, v]) => (
        <div className="card" style={{ width: 320 }} key={k}>
          <div className="card-body">
            <div
              className="fs-4 card-title text-center"
              dangerouslySetInnerHTML={{ __html: v.title }}
            ></div>
            {v.list.map((i) => (
              <span
                className="fs-6 m-1 d-inline-flex p-2"
                dangerouslySetInnerHTML={{ __html: i }}
                key={i}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
