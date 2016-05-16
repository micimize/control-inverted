import StrictDuck, { utils } from 'strictduck'
import resolve from './resolve'

export default function depends({
    name, parent=StrictDuck,
    dependencies=[], constructor: c = (...args) => args
}) {
    return utils.nameClass({
        name: name || parent.name,
        Class: class extends parent {
            constructor({container, ...rest}){
                super(...c({
                    ...resolve({container, dependencies}),
                    ...rest
                }))
            }
        }
    })
}
