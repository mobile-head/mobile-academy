const CodeExamples = {
    badP1: `
        if (parada.TPPARADA == 1){
            ...
    `,
    bestP1: `
        const TYPES = {NORMAL: 1, CHECKPOINT: 2, ...};

        if (parada.TPPARADA == TYPES.NORMAL){
	        ...
    `,

    //-----------------------------------------------------------------------
    badP2: `
    <View style={styles.row}>
    <Text style={styles.text}>Placa do Veículo: </Text>
    <Text style={[styles.text, { fontWeight: 'bold' }]}>{item.NRPLAVEI}</Text>
    </View>
    `,
    bestP2: `
    <View style={styles.row}>
        <Text style={styles.text}>Placa do Veículo: </Text>
        <Text style={[styles.text, { fontWeight: 'bold' }]}>{item.NRPLAVEI}</Text>
    </View>
    `,

    //-----------------------------------------------------------------------
    badP3: `    
    const updatePercente = () => {
        ...
    }    
    const handleCrossdocking = () => {
        ...
    }
    `,

    //-----------------------------------------------------------------------
    bestP3: `
    //===============================================================================================    
    const updatePercente = () => {
        ...
    }

    //===============================================================================================    
    const handleCrossdocking = () => {
        ...
    }
    `,

    //-----------------------------------------------------------------------
    badP4: `    
    //======================================================================================
    function initChecklistHandler() {
        ...
    }
    
    //======================================================================================
    useEffect(() => {
        if (checklists) 
            ...

    }, [checklists])

    //======================================================================================
    const onRefresh = useCallback(() => {
        ...
    }, []);
    `,

    //-----------------------------------------------------------------------
    bestP4: `
    //======================================================================================
    useEffect(() => {
        if (checklists) 
            ...
           
    }, [checklists]);

    //======================================================================================
    const onRefresh = useCallback(() => {
        ...
    }, []);

    //======================================================================================
    function initChecklistHandler() {
        ...
    }    
    `,

    //-----------------------------------------------------------------------
    badP5: `
    <Text style={{ fontSize: 26, fontWeight: '600', color: Colors.white }}>Cancelar</Text>
    `,

    //-----------------------------------------------------------------------
    bestP5: `
    <Text style={styles.btnStyle}>Cancelar</Text>
    `,

    //-----------------------------------------------------------------------
    bestP6: 
    "export const Container = styled.SafeAreaView` \n" +
    "flex: 1;\n" +
    "background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.primary};\n" +
    "margin-top: ${props => props.marginTop ? fixUnits(props.marginTop) : '0px'};\n" +
    "margin-left: ${props => props.marginLeft ? fixUnits(props.marginLeft) : '0px'};\n" +
    "margin-right: ${props => props.marginRight ? fixUnits(props.marginRight) : '0px'};\n" +
    "margin-bottom: ${props => props.marginBottom ? fixUnits(props.marginBottom) : '0px'};",

    //-----------------------------------------------------------------------
    bestP7: `
    <InputSearch
    placeholder={'Setor'}
    search={filterChecklistType}
    sendData={{ IDS001: questions.user.IDS001, IDS025: questions.modulo.IDS025 }}
    onSelect={onSelectSetor}
    hopedKey={'NMCHLIST'}
    showValueWithKey={'NMCHLIST'} />
    `,
}

export { CodeExamples };