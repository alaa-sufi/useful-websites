export default function NoData({ onReset }) {
    return (
        <div className='text-center h2 w-100 py-5'>
            <p className='text-center h2 '>no result </p>
            <i className='fa fa-frown display-3' />
            <button className="button" onClick={() => onReset()}>Reset</button>
        </div>
    )
}