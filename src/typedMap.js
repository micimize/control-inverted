import { extend, utils } from 'strictduck'
import { objectContainsOnly } from './resolve'

export default function typedMap({
    name, strictduck=StrictDuck
}) {
    return utils.nameClass({
        name: name || `${strictduck.name}Map`,
        Class: class extends extend({name: 'Map'}) {
            constructor(object){
                objectContainsOnly({strictduck, object})
                super(object)
            }
        }
    })
}
