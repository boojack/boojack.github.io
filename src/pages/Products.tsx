import React from "react";
import "../less/products.less";

const Products: React.FunctionComponent = () => {
  const products: Model.Product[] = [
    {
      name: "Memos",
      url: "https://memos.onrender.com/",
      description: "An open-source alternative to flomo.",
      opensource: true,
      repositoryUrl: "https://github.com/justMemos/memos",
    },
    {
      name: "Sticky notes",
      url: "https://sticky-notes.onrender.com/",
      description: "Classical style sticky note cards.",
      opensource: true,
      repositoryUrl: "https://github.com/justMemos/sticky-notes",
    },
    {
      name: "v2ex daily hot topics",
      url: "https://boojack.github.io/v2ex-daily-hot-topic-web/",
      description: "V2EX daily hot topics.",
      opensource: true,
      repositoryUrl: "https://github.com/boojack/v2ex-daily-hot-topic-web",
    },
  ];

  return (
    <div className="page-content-container products">
      <h2>
        I always wanna using the products made by myself,
        <br />
        and achieved it finally. <span className="icon-text">🎉</span>
      </h2>

      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.url} className="product-container">
            <p className="name-text">
              {product.url ? (
                <a target="_blank" href={product.url}>
                  {product.name}
                </a>
              ) : (
                product.name
              )}
            </p>
            <p className="desc-text">{product.description}</p>
            <p className="repo-text">
              {product.url ? (
                <>
                  <a className="url-text link" target="_black" href={product.url}>
                    Online Link
                  </a>
                  <span className="split-text">/</span>
                </>
              ) : null}
              {product.opensource ? (
                <a className="url-text" target="_black" href={product.repositoryUrl}>
                  <img src="./icons/github.svg" className="icon-img" />
                  {"  "}Source code
                </a>
              ) : null}
            </p>
          </div>
        ))}
        <p>
          ... See more at{" "}
          <a target="_black" href="https://github.com/boojack">
            My Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Products;
