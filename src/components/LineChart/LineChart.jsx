import { LineChart as LChart, Line, ResponsiveContainer } from 'recharts';

const LineChart = () => {
   const mathMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 80, english: 78 },
        { id: 2, name: "Bob", math: 78, physics: 75, english: 82 },
        { id: 3, name: "Charlie", math: 92, physics: 88, english: 85 },
        { id: 4, name: "David", math: 88, physics: 82, english: 79 },
        { id: 5, name: "Eve", math: 76, physics: 70, english: 80 },
        { id: 6, name: "Frank", math: 90, physics: 85, english: 88 },
        { id: 7, name: "Grace", math: 83, physics: 78, english: 84 },
        { id: 8, name: "Hannah", math: 95, physics: 90, english: 92 },
        { id: 9, name: "Ian", math: 80, physics: 76, english: 81 },
        { id: 10, name: "Jack", math: 87, physics: 79, english: 83 }
      ];
      
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <LChart data={mathMarksData}>
                   
                    <Line type="monotone" dataKey="math" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="physics" stroke="red" strokeWidth={2} />
                </LChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;
