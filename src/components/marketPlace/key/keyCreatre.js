import classes from "./keyCreate.module.css"

export default function KeyCreate() {
    return (
        <div className={classes.fundo}>
            <h1>Crie sua chave de compras</h1>
           
            <div className={classes.field}>
                <input
                    type="text"
                    name="cadNickname"
                    className={classes.dados}
                    placeholder="Nome Completo"
                />
                <br />
            </div>
            <div className={classes.field}>
                <input
                    type="email"
                    name="cadEmail"
                    className={classes.dados}
                    placeholder="E-mail"
                />
                <br />
            </div>
            <div className={classes.field}>
                <input
                    type="text"
                    name="cadPassword"
                    className={classes.dados}
                    placeholder="Numero do Cartão"
                />
                <br />
            </div>
            <div className={classes.field}>
                <input
                    type="text"
                    name="passwordConfirm"
                    className={classes.dados1}
                    placeholder="CVV"
                />
                 <input
                    type="text"
                    name="passwordConfirm"
                    className={classes.dados1}
                    placeholder="Validade"
                />
                <br />
            </div>
            <div>

                <button>Cadastre-se</button>
                <br />
            </div>
        </div>
    )
}