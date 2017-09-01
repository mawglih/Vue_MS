export const lengthAwareMixin = {
    computed:{
        lengthAware() {
            return this.textString + ' (' + this.textString.length + ')';
        }
    }
    
}