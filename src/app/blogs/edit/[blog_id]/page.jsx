"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
// import { useNavigate, useParams } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { update, getProductById } from "../../actions/adminActions";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useRouter } from "next/router";
import SidebarBlogEditor from "@/components/SidebarBlogEditor";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import "./style.css";
import mountain from "@/img/jpg/mountain.jpg"
import Image from "next/image";

// import base_url from "../../helpers/base_url";

export default function BlogEditor({ params }) {
  // const { action, status, data } = useSelector((state) => state.adminReducer);
  // const dispatch = useDispatch();
  // const router = useRouter();

  const editorRef = useRef();
  const toolBarRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, DecoupledEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      DecoupledEditor: require("@ckeditor/ckeditor5-build-decoupled-document"),
    };
    setEditorLoaded(true);
  }, []);

  const [data, setData] = useState("");

  // const id = params.id;
  // console.log("id", id);

  // const [form, setForm] = useState({
  //   name: "",
  //   desc: "",
  //   price: 0,
  //   stock: 0,
  //   brand: "",
  //   weight: 0,
  //   category: "",
  //   condition: "",
  // });

  // useEffect(() => {
  //   if (action === "GET_PRODUCT_BY_ID" && status === "data") {
  //     setForm({
  //       name: data.name,
  //       desc: data.desc,
  //       price: data.price,
  //       brand: data.brand,
  //       stock: data.stock,
  //       weight: data.weight,
  //       category: data.category,
  //       condition: data.condition,
  //     });
  //   }
  //   // else if (action === "UPDATE" && status === "data") {
  //   //   dispatch(getUser());
  //   // }
  // }, [data, dispatch]);

  // useEffect(() => {
  //   if (action === "UPDATE" && status === "data") {
  //     router.push(`/admin/details/${id}`);
  //   }
  // });

  // const editProductHandler = () => {
  //   dispatch(update(form, id));
  // };

  // useEffect(() => {
  //   dispatch(getProductById(id));
  // }, [id]);

  const [sizes, setSizes] = useState(["auto", 400]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <main className="w-screen h-screen">
      <SplitPane sizes={sizes} onChange={(sizes) => setSizes(sizes)}>
        <Pane
          className=""
          // className="bg-light-mode-white-1"
          style={{ ...layoutCSS }}
        >
          <div className="flex justify-center h-full w-full">
            <div className="w-full px-10">
              <div className="py-4 text-xl font-bold text-darkColor flex justify-between">
                <label>Title</label>
                <div className="flex justify-center items-center">
                  <div>
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={mountain}
                      alt="Rounded avatar"
                    />
                  </div>
                </div>
              </div>
              <div ref={toolBarRef} />

              <div className="border mt-10 bg-light-mode-white-1 overflow-y-auto h-canvas">
                <div className="p-5 flex justify-center">
                  {editorLoaded && (
                    <div className="bg-light-mode-white-2 w-[820px] min-h-[1150px] flex justify-center items-center">
                      <CKEditor
                        editor={DecoupledEditor}
                        data="<p>Content</p>"
                        onReady={(editor) => {
                          if (toolBarRef.current.id !== "toolbar-ckeditor5") {
                            toolBarRef.current.setAttribute(
                              "id",
                              "toolbar-ckeditor5"
                            );
                            toolBarRef.current.appendChild(
                              editor.ui.view.toolbar.element
                            );
                          }
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Pane>
        <Pane minSize={5} style={{ ...layoutCSS }}>
          <SidebarBlogEditor />
        </Pane>
      </SplitPane>

      {/* <div className="mx-auto w-11/12 md:w-4/5 lg:w-10/12 bg-white rounded-md min-h-screen py-5 my-10 grid grid-cols-6 absolute">
        <section className="col-span-5 border">
          
        </section>
        
      </div> */}
    </main>
  );
}
