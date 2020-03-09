

  let contentPage = {
    componentName: 'adminui-content-page',
    children: [
      {
        componentName: 'adminui-content-page-header',
        state: {
          title: '__title'
        }
      },
      {
        componentName: 'adminui-row',
        children: [
          {
            componentName: 'adminui-content-card',
            state: {
              title: '__cardTitle',
              title_colour: '__cardTitleColour',
              name: '__cardName',
              text: '__text'
            },
            children: '__children'
          }
        ]
      }
    ]
  };

  export {contentPage};
