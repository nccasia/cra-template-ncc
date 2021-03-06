import { Col, Row, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";

const ProtectedLayout = ({ children }) => {

    return (
        <Row className="layout-content" justify="space-around">
              {children}
        </Row>

    );
};

export default ProtectedLayout;
