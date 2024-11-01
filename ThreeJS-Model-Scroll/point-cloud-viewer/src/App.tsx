import PCDViewer from './components/PCDViewer'; // Adjust path based on where PCDViewer.tsx is located
import PointCloudViewer from './components/PointCloudViewer';

function App() {
  return (
    <div>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <PCDViewer />
    </div>
      {/* <PointCloudViewer fileType="pcd" filePath="/scene0000_00_vh_clean_2.pcd" /> */}
    </div>
  );
}

export default App;