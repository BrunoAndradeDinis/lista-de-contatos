import * as S from './styles'

const FormularioContato = () => {
    return ( <>
        <S.MainContainer>
            <h2>Criar contato</h2>

            <div>
                <img src="icons/amigos.png" />

                <div>
                    <S.Input type="text" id='nome' required placeholder=" " />
                    <label htmlFor="nome">Nome</label>
                </div>
            </div>
            <div>
               
                    <img src="icons/email.png" />
              
                <div>
                    <S.Input type="email" id="email" required placeholder=" " />
                    <label htmlFor="email">E-mail</label>
                </div>
            </div>
            <div>
               
                    <img src="icons/telefone.png" />
           
                <div>
                    <S.Input type="tel" id="telefone" required placeholder=" " />
                    <label htmlFor="telefone">Telefone</label>
                </div>
            </div>
            <S.CategoriaFieldset>
                <legend>Categoria</legend>
                <div>
                    <input type='radio' name='categoria' value='amigos' id='amigos'/>
                    <label htmlFor="amigos">Amigos</label>
                </div>
                <div>
                    <input type='radio' name='categoria' value='familia' id='familia'/>
                    <label htmlFor="familia">Familia</label>
                </div>
                <div>
                    <input type='radio' name='categoria' value='trabalho' id='trabalho'/>
                    <label htmlFor="trabalho">Trabalho</label>
                </div>
            </S.CategoriaFieldset>

            <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
        </S.MainContainer>
    </> );
}
 
export default FormularioContato;