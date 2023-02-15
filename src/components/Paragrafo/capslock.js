function CapsLock(props) {
    const paragrafoInserido = props.paragrafo;
    const paragrafoEmCapsLock = paragrafoInserido.toUpperCase();
    return <div>{paragrafoEmCapsLock}</div>
}

export default CapsLock