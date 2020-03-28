import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from "../../redux/shop/shop.selector";
import './collections-overview.styles.scss';
import PreviewCollection from "../preview-collection/preview-collection.component";


const CollectionOverview = ({collections})=>(

    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionsProps}) => (
                <PreviewCollection key={id} {...otherCollectionsProps}/>
            ))
        }


    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollections

});

export default connect(mapStateToProps) (CollectionOverview);

