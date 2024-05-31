export default function Modal({ closeModal }) {
  return (
    <div className="modal-wrapper">
      <div className="modal-outer">
        <div className="modal-inner">
          <div className="header">
            <span className="close-button" onClick={closeModal}>
              X
            </span>
          </div>
          <div className="body">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quasi veritatis officiis molestias commodi eveniet nam
              inventore voluptates reiciendis maxime a magnam optio, iusto
              libero provident expedita ipsam repellendus vero!
            </p>
          </div>
          <div className="footer">footer 123 456 789</div>
        </div>
      </div>
    </div>
  );
}
