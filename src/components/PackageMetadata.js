import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// IMPORTANT!
// In the docs thing we currently cannot use components that are in the library, so no typography or color packages..

const MetadataWrapper = styled.div`
  background: #bec4d038;
  padding: 32px;
  overflow: scroll;
`;

const MetadataFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 36px;
`;

const MetadataTitle = styled.div`
  flex-basis: 140px;
  font-weight: bold;
`;

const MetadataValue = styled.div`
  flex-grow: 2;
  text-align: left;
`;

const Pre = styled.pre`
  margin: 0;
`;

const UlInDetail = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MetadataField = ({ title, value }) => {
  return (
    <MetadataFieldWrapper>
      <MetadataTitle>{title}</MetadataTitle>
      <MetadataValue>{value}</MetadataValue>
    </MetadataFieldWrapper>
  );
};

const DependenciesList = ({ dependencies = {} }) => {
  const depsList = Object.entries(dependencies).map(([name, version]) => (
    <li key={name}>
      <Pre>
        {name}@{version}
      </Pre>
    </li>
  ));
  return depsList.length === 0 ? (
    <span>No Dependencies</span>
  ) : (
    <UlInDetail>{depsList}</UlInDetail>
  );
};

const PackageMetadata = ({ pkg }) => {
  if (!pkg) return null;
  return (
    <MetadataWrapper>
      <MetadataField title="Name" value={<Pre>{pkg.name}</Pre>} />
      <MetadataField title="Latest" value={pkg.version} />
      <MetadataField title="License" value={pkg.license} />
      <MetadataField
        title="Installation"
        value={<Pre>yarn add {pkg.name}</Pre>}
      />
      <MetadataField
        title="Links"
        value={
          <ul>
            {pkg.homepage && (
              <li>
                <a href={pkg.homepage}>README</a>
              </li>
            )}
            {pkg.repository && (
              <li>
                <a href={pkg.homepage}>README</a>
              </li>
            )}
          </ul>
        }
      />

      <MetadataField
        title={`Dependencies (${
          Object.entries(pkg.dependencies || {}).length
        })`}
        value={<DependenciesList dependencies={pkg.dependencies} />}
      />
    </MetadataWrapper>
  );
};

PackageMetadata.propTypes = {
  /** The package.json as object */
  pkg: PropTypes.object.isRequired
};

export default PackageMetadata;
