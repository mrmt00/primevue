import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-tab',
        {
            'p-active': instance.active,
            'p-disabled': props.disabled
        }
    ]
};

export default BaseStyle.extend({
    name: 'tab',
    classes
});
