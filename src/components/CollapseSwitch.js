export default function CollapseSwitch({ isCollapsedAll ,setIsCollapsedAll }) {
    return (
        <div className="d-flex gap-2 align-items-center">
            <span>Collabsed All </span>
            <div className="collapse-toggle">
                <input type="checkbox" id="custom-toggle"
                    checked={isCollapsedAll}
                    onInput={(e) => setIsCollapsedAll(!isCollapsedAll)} />
                <label htmlFor="custom-toggle">
                    <span className="collapse-toggle_text">
                        <span className="on">on</span>
                        <span className="off">off</span>
                    </span>
                </label>
            </div>
        </div>
    )
}