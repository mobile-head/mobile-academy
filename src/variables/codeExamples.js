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

  WorkspacePreparation: {
    Mac: {
      EnvironmentVariables: [
        `sudo nano ~/.zshrc`,
        `
#ENVIRONMENT VARIBALES:
export PATH="/opt/homebrew/opt/node@12/bin:$PATH"
export PATH="/opt/homebrew/opt/sqlite/bin:$PATH"
export PATH="~/.npm-global/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/ruby/lib"
export CPPFLAGS="-I/usr/local/opt/ruby/include"
export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"

#MY VARIABLES
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.12.jdk/Contents/Home
export ANDROID_HOME=/Users/matheus.quirino/Library/Android/sdk/

#export ORACLE_HOME=/usr/local/lib/instantclient
export ORACLE_HOME=/opt/oracle/instantclient
export DYLD_LIBRARY_PATH=$ORACLE_HOME
export LD_LIBRARY_PATH=$ORACLE_HOME

export TNS_ADMIN=$ORACLE_HOME/network/admin
#export OCI_INC_DIR=$TNS_ADMIN/sdk/include/
#export OCI_LIB_DIR=$TNS_ADMIN/sdk/lib/msvc/

export PATH=$PATH:/Applications/Visual\ Studio\ Code.app/Contents/Resources/app$
export REACT_EDITOR=code

#ADDING IN PATH VARIABLE

export PATH=$PATH:$TNS_ADMIN
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
#export PATH=$PATH:/usr/local/lib/instantclient/
export PATH=$PATH:$ORACLE_HOME
export PATH=$PATH:/opt/homebrew/Cellar/watchman/
export PATH=$PATH:/opt/d2u742pm/bin
export PATH=$PATH:$JAVA_HOME

#export PATH=$ORACLE_HOME:$PATH

code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This load$
eval "$(/opt/homebrew/bin/brew shellenv)"

#Aliases
alias ssh-bravo="ssh -i ~/Desktop/bravolog22.pem -p 22 bravolog@10.0.1.233"
alias ssh-dev-qas="ssh -i ./Desktop/bravolog-dev-qas.pem -p 22 ubuntu@10.0.3.98"

#Functions
bash$ makeBackup () {
  cp -i "$1" "$1.bak";
}
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
        `,
        `source ~/.zshrc`,
      ],
    },
  },

  NativeModules: {
    Ios: {
      Bridge: [
        `// == BridgingHeader.h ==

#import "AppDelegate.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

/*
* Lembrete: Importações em Objective-C podem ser nomeadas utilizando 
* <> para arquivos em pacotes ou
* "" para arquivos soltos.
*/
            `,
        `// == RCTBridge.m ==
        
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

// ============ EXAMPLE =============
@interface RCT_EXTERN_MODULE(ExampleClass, NSObject)
// Serve para exportar uma classe em Swift mantendo o nome da classe

RCT_EXTERN_METHOD(simpleMethod:(int*)firstParameter 
                  secondParameter:(NSString*)secondParameter)
/*
* Expõe um método Swift para o React-Native. Neste exemplo, o método recebe
* dois parâmetros. Um inteiro e uma string chamados firstParameter e
* secondParameter, respectivamente.
*/

RCT_EXTERN_METHOD(simpleCallbackMethod:(int*)firstParameter 
                  callback:(RCTResponseSenderBlock*)callback)
/*
* Expõe um método que recebe uma função anônima como parâmetro para o React-Native.
* Nesse caso, o parâmetro é nomeado "callback" mas o nome pode ser qualquer um.
*/

RCT_EXTERN_METHOD(constantsToExport)
// A função constantsToExport expõe variáveis em Swift para o React-Native.
@end

// ============ EXAMPLE =============
@interface RCT_EXTERN_REMAP_MODULE(MyModule, ExampleClass, NSObject)
/*
* Expõe uma classe Swift para o React-Native alterando o nome para "MyModule".
* Lá, ela será acessada por NativeModules.MyModule.
*/
@end

// ============ EXAMPLE =============
@interface RCT_EXTERN_MODULE(ExampleEventEmitter, RCTEventEmitter)
/*
* Instancia uma classe nativa que possui a capacidade de enviar eventos
* para um ouvinte (listener) no React-Native.
*/

RCT_EXTERN_METHOD(supportedEvents)
/* 
* Esse método deve retornar os nomes de todos os possíveis 
* eventos que este emissor é capaz de disparar em uma Array.
*/
@end

            `,
        `// == ExampleClass.swift ==

import Foundation

@objc(ExampleClass)
class ExampleClass: NSObject, RCTBridgeModule {

    @objc
    func simpleMethod(_ firstParameter: Int, secondParameter: NSString){
        guard secondParameter = secondParameter.utf8String else{
            return
        }
        print(firstParameter)
        print(secondParameter)
    }

    @objc
    func simpleCallbackMethod(_ firstParameter: Int,
                              callback: @escaping RCTResponseSenderBlock){
        print(firstParameter)
        callback([firstParameter])
    }

    @objc
    func constantsToExport() -> [AnyHashable: Any]! {
        // Método responsável pela exposição de variáveis para o React-Native.
        return [
            "exportedVariable1": "value",
            "exportedVariable2": 123,
            "exportedVaraible3": false
        ]
        // Retornar "[:]" caso não queiramos exportar variáveis.
    }

    static func moduleName() -> String! {
        // Retorna o nome que a classe utilizará no JavaScript.
        // Se a classe for renomeada, retorne o novo nome aqui.
        return "ExampleClass"
    }

    static func requiresMainQueueSetup() -> Bool {
        /*
        * Retorna para a aplicação se essa classe precisará que a thread principal
        * esteja instanciada. Geralmente se retorna true quando se pretende realizar
        * atualizações na interface (UI) através da DispatchQueue.main.
        */
        return false
    }
}        
        `,
        `// == ExampleEventEmitter.swift ==

@objc(ExampleEventEmitter)
class ExampleEventEmitter: RCTEventEmitter{

    func fireEvent(){
        /*
        * É um exemplo de função que é responsável por disparar
        * eventos para o React-Native. Esse método poderia ter sido
        * exposto para a aplicação para ser chamado em React-Native.
        */
        var data: Dictionary<AnyHashable, Any> = [:]
        /*
        * Uma forma de representar um objeto 
        * que será transformado em JSON em JavaScript.
        */
        data.updateValue("value", forKey: "data_key_1")
        data.updateValue(123, forKey: "data_key_2")
        data.updateValue(false, forKey: "data_key_3")

        self.sendEvent("event_1", data)
        // Dispara o evento chamado "event_1" enviando os dados no objeto

        /*
        * CASO a primeira aproximação não funcione,
        * pode-se utilizar uma DispatchQueue para garantir o disparo:
        */
        DispatchQueue.global(qos: .utility).async{
            self.sendEvent("event_2", data)
        }
    }

    @objc
    override func supportedEvents() -> [String]! {
      return [
          "event_1",
          "event_2"
      ]
    }

}
        `,
        `// == Componente em JavaScript ==
import React, { useEffect } from "react";
import { NativeModules, NativeEventEmitter } from "react-native";

const Componente = () => {
  useEffect(() => {
    NativeModules.ExampleClass.simpleMethod(1, "Parameter");
    NativeModules.ExampleClass.simpleCallbackMethod(2, (result) => {
        console.log(result);
    });

    const eventEmitter =
         new NativeEventEmitter(NativeModules.ExampleEventEmitter);
    eventEmitter.addListener(
        "event_1",
        (receivedValue1, receivedValue2, receivedValue3) => {
            console.log(receivedValue1, receivedValue2, receivedValue3);
        }
    );
  }, []);
  
  return ();
};

export default Componente;
        `,
      ],
    },
  },
};

export { CodeExamples };
