import React from "react";
import { jsPDF } from "jspdf";

function Stats({ items }) {
    const total = items.length;
    const packed = items.filter((item) => item.packed).length;
    const percentage = total > 0 ? Math.round((packed / total) * 100) : 0;

    const download =() => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text("My Travel List ", 20, 20);
        doc.setFontSize(12);
    
        if (percentage === 100) {
            doc.text("You got everything!", 20, 40);
        } else {
            doc.text(`You have ${total} items in your list, and you already packed ${packed} (${percentage}%).`, 20, 40);
        }


        doc.save("travel-list-stats.pdf");
        };
      
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything!  "
            : `You have ${total} items in your list, and you already packed ${packed} (${percentage}%)   ` }
        </em>
        <button onClick={download}>Download PDF</button>
      </footer>
    );
  }

  export default Stats;