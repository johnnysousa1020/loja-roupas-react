import "./CheckoutModal.css"

function CheckoutModal({ onClose }){
    return(
        <div className="modal-overlay">
            <div className="modal">
                <h2>Compra realizada!</h2>
                <p>Seu pedido foi concluído com sucesso.</p>

                <button onClick={onClose}>
                    Voltar ao inicio
                </button>
            </div>
        </div>
    )
}

export default CheckoutModal;