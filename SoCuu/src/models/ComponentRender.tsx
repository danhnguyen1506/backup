import * as define from '../common/define';
export let DefaultTextFontSize = define.DefaultTextFontSize;
import { BaseScreen } from '../screens/BaseScreen';
import * as Flow from './ScreenFlow';
let Utils = define.Utils;

export default class ComponentRender extends BaseScreen{
    info:Flow.ComponentModel;
    dataSource: any;    
    

    constructor(props?) {
        super(props)
        this.info = props.info;              
        this.dataSource = Utils.ListViewDataSource.cloneWithRows(this.info.components);
    }
    
}
