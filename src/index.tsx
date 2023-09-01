import { render } from "./components/render";
import { RenderTree } from "./components/renderTree";

import IconPersonCircle from "bootstrap-icons/icons/person-circle.svg";
import IconPerson from "bootstrap-icons/icons/person.svg";
import IconFunnel from "bootstrap-icons/icons/funnel.svg";
import IconFunnelFill from "bootstrap-icons/icons/funnel-fill.svg";
import IconFileEarmarkText from "bootstrap-icons/icons/file-earmark-text.svg";
import IconFileEarmarkTextFill from "bootstrap-icons/icons/file-earmark-text-fill.svg";
import { useTooltip } from "./hooks/bootstrap";
import { useEffect } from "react";
import bookmarkText from "bundle-text:./bookmarks.md";
import { markdownToJSON } from "./utils/convert";

const App = () => {
  // useTooltip();

  // console.log('bookmarkText', bookmarkText)

  const tree = markdownToJSON(bookmarkText);

  console.log("tree", tree);

  return (
    <div className="container-xxl pt-2 d-flex flex-column vh-100">
      {/* <div className="mb-2">
        <input
          className="form-control form-control  border-0 border-bottom"
          placeholder="输入名称、网址、标签信息查询"
        />
      </div> */}
      <div className="d-flex flex-column flex-fill">
        <div className="d-flex flex-fill align-items-stretch">
          {/* <div className=" p-2 border-end" style={{ width: 240 }}>
            Tags
          </div> */}
          <div className="flex-fill p-2 d-flex justify-content-center align-items-center">
            <RenderTree struct={tree} />
          </div>
          {/* <div className="flex-fill p-2 border-start">Editor</div> */}
        </div>
        {/* <div className="border-top py-2 d-flex justify-content-between align-items-center">
          <div>
            <img src={IconPersonCircle} className="w-6 h-6 mx-2" />
            <img src={IconPerson} className="w-6 h-6 mx-2" />
            <img src={IconFunnelFill} className="w-6 h-6 mx-2" />
            <img src={IconFunnel} className="w-6 h-6 mx-2" />
            <img src={IconFileEarmarkText} className="w-6 h-6 mx-2" />
            <img src={IconFileEarmarkTextFill} className="w-6 h-6 mx-2" />
          </div>
          <div>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                autoComplete="off"
              />
              <label className="btn" htmlFor="btncheck1">
                Tags
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autoComplete="off"
                checked
                readOnly
              />
              <label className="btn" htmlFor="btncheck2">
                List
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                autoComplete="off"
                // disabled
                readOnly
              />
              <label
                className="btn"
                htmlFor="btncheck3"
                data-bs-toggle="tooltip"
                // data-bs-custom-class="custom-tooltip"
                data-bs-title="敬请期待"
              >
                Editor
              </label>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

render(App);
